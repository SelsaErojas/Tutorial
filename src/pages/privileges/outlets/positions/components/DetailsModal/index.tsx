import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { IPosition } from "../../add-position/types";
interface Field {
  id: string;
  labelName: string;
}

interface IDetailsModalProps {
  data?: IPosition;
  showModal: boolean;
  handleToggleModal: () => void;
  labelsOptions: Field[];
}

export const DetailsModal = (props: IDetailsModalProps) => {
  const { data, showModal, handleToggleModal, labelsOptions } = props;
  return (
    <>
      {showModal && data && (
        <InteractiveModal
          portalId="portal"
          title="Detalles de cargo"
          infoData={data}
          infoTitle=""
          labels={labelsOptions}
          closeModal={handleToggleModal}
        />
      )}
    </>
  );
};
