import { Assisted } from "@inubekit/assisted";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";

import { isMobile580 } from "@config/environment";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";

import {
  createPositionConfig,
  stepsAddPosition,
} from "./config/addPosition.config";
import { StyledContainerAssisted } from "./styles";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  IStep,
  titleButtonTextAssited,
} from "./types";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
//import { InitializerForm } from "../../forms/InitializerForm";
import { VerificationAddPosition } from "../components/VerificationForm";

const renderStepContent = (
  currentStep: number,
  formReferences: IFormAddPositionRef,
  dataAddPositionLinixForm: IFormAddPosition,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  //handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <>
      {currentStep === stepsAddPosition.generalInformation.id && (
        <GeneralInformationForm
          initialValues={dataAddPositionLinixForm.generalInformation.values}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === stepsAddPosition.summary.id && (
        <VerificationAddPosition
          steps={dataAddPositionLinixForm}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};
interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  loading: boolean;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleToggleModal: () => void;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    steps,
    currentStep,
    dataAddPositionLinixForm,
    formReferences,
    //loading,
    setIsCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    //handleUpdateDataSwitchstep,
    setCurrentStep,
    //handleToggleModal,
  } = props;
  const smallScreen = useMediaQuery(isMobile580);
  return (
    <Stack
      direction="column"
      padding={
        smallScreen
          ? `{${basic.spacing.s16}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s32} direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={basic.spacing.s50}
          >
            <PageTitle
              title={createPositionConfig[0].title}
              description={createPositionConfig[0].description}
              navigatePage="/privileges/positions"
            />
          </Stack>
        </Stack>
        <>
          <StyledContainerAssisted $cursorDisabled={false}>
            <Assisted
              steps={steps}
              currentStepId={currentStep}
              handlePrev={handlePreviousStep}
              handleNext={handleNextStep}
              titleButtonText={titleButtonTextAssited}
            />
          </StyledContainerAssisted>
          {renderStepContent(
            currentStep,
            formReferences,
            dataAddPositionLinixForm,
            setIsCurrentFormValid,
            //handleUpdateDataSwitchstep,
            setCurrentStep
          )}
        </>
        <Stack gap={basic.spacing.s16} justifyContent="flex-end">
          <Button
            onClick={handlePreviousStep}
            type="button"
            disabled={currentStep === steps[0].id}
            spacing="compact"
            variant="none"
            appearance="gray"
          >
            Atrás
          </Button>

          <Button onClick={handleNextStep} spacing="compact" disabled={false}>
            {currentStep === steps.length ? "Enviar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
