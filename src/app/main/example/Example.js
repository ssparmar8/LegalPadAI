import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { StepsProvider } from './StepContext.tsx';
import StepForm from './components/StepForm';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function ExamplePage(props) {
  const { t } = useTranslation('examplePage');

  return (
    <Root
      content={
        <StepsProvider>
          <div className="p-24 w-full">
            <StepForm />
          </div>
        </StepsProvider>
      }
      scroll="content"
    />
  );
}

export default ExamplePage;
