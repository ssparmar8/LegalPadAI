/* eslint-disable no-return-assign */
import { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { ContentState, convertToRaw } from 'draft-js';
import { useSnackbar } from 'notistack';
import { Editor } from 'react-draft-wysiwyg';
import ReactToPrint from 'react-to-print';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Success({ generateText }) {
  const _contentState = ContentState.createFromText(generateText);
  const raw = convertToRaw(_contentState);
  const [editorState, setEditorState] = useState(raw);

  const _previewContentState = ContentState.createFromText(generateText);
  const previewRaw = convertToRaw(_previewContentState);
  const [convertedContent, setConvertedContent] = useState(previewRaw);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [isEdit, setIsEdit] = useState(false);
  let componentRef = useRef();

  function handleUpdateContent() {
    setIsEdit(false);
    if (editorState && editorState.blocks && editorState.blocks.length) {
      setConvertedContent(editorState.blocks[0].text);
      enqueueSnackbar('Document has been updated', {
        variant: 'success',
        autoHideDuration: 2000,
      });
    }
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="left" sx={{ py: 1 }}>
        Ready for Review
      </Typography>
      <div>
        <Typography component="p" align="right">
          {!isEdit ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setIsEdit(true)}
                className="rounded-none"
              >
                Edit
              </Button>
              <ReactToPrint
                trigger={() => (
                  <Button variant="contained" color="secondary" className="mx-4 rounded-none">
                    Print
                  </Button>
                )}
                content={() => componentRef}
              />
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateContent}
              className="rounded-none"
            >
              Save
            </Button>
          )}
        </Typography>
        <div className="pt-16">
          <Card sx={{ width: '100%', boxShadow: 'none' }}>
            <CardContent>
              {!isEdit ? (
                <Editor
                  ref={(el) => (componentRef = el)}
                  toolbarClassName="hide-toolbar"
                  readOnly
                  defaultContentState={convertedContent}
                  onContentStateChange={setConvertedContent}
                />
              ) : (
                <Editor
                  toolbarClassName="hide-toolbar"
                  defaultContentState={editorState}
                  onContentStateChange={setEditorState}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default Success;
