import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MdSearch, MdPersonAddAlt } from "react-icons/md";

import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import { Textfield } from "@inubekit/textfield";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import {
  Col,
  Colgroup,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  Tfoot,
  Pagination,
} from "@inubekit/table";
import { PageTitle } from "@components/PageTitle";
import { basic } from "@design/tokens";
import { isMobile580 } from "@config/environment";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import { privilegeOptionsConfig } from "../../config/privileges.config";
import {
  titlesOptions,
  renderActionIcon,
  labelsOptions,
} from "./config/dataPositions";
import { IPosition } from "./add-position/types";
import { usePagination } from "./components/GeneralInformationForm/utils";
import { StyledButtonWrapper } from "./styles";
import { DetailsModal } from "./components/DetailsModal";

const pagerecord = 10;

interface IPositionsProps {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IPosition[];
  loading: boolean;
}

export function PositionsUI(props: IPositionsProps) {
  const { handleSearchPositions, searchPosition, loading, data } = props;
  const smallScreen = useMediaQuery(isMobile580);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const [modalData, setModalData] = useState<IPosition | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAction = (
    event: React.MouseEvent,
    row: IPosition,
    actionType: string
  ) => {
    event.stopPropagation();

    if (actionType === "details") {
      setModalData(row);
      handleToggleModal();
    } else if (actionType === "edit") {
      null;
    }
  };

  const {
    filteredData,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
    firstEntryInPage,
    lastEntryInPage,
    paginatedData,
  } = usePagination(searchPosition, data, pagerecord);

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={
        smallScreen
          ? `{${basic.spacing.s24}}`
          : `${basic.spacing.s32} ${basic.spacing.s64}`
      }
    >
      <Stack gap={basic.spacing.s48} direction="column">
        <Stack gap={basic.spacing.s24} direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label.crumbs} />
              <PageTitle
                title={label.label}
                description={label.description}
                navigatePage="/privileges/options"
              />
            </>
          )}
        </Stack>
        <Stack>
          <Text type="title" size={smallScreen ? "medium" : "large"}>
            Consulta de Cargos vigentes ({filteredData.length})
          </Text>
        </Stack>
        <Stack gap={basic.spacing.s32} direction="column">
          <Stack justifyContent="space-between" alignItems="center">
            <Textfield
              name="searchPositions"
              id="searchPositions"
              placeholder="Búsqueda..."
              type="search"
              iconBefore={<MdSearch />}
              size="compact"
              value={searchPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPositions(e)
              }
            />
            <StyledButtonWrapper>
              <Button
                iconBefore={<MdPersonAddAlt />}
                spacing="wide"
                type="link"
                path="/privileges/positions/add-position"
              >
                Solicitar nuevo cargo
              </Button>
            </StyledButtonWrapper>
          </Stack>
          {loading && data.length <= 0 ? (
            <LoadingApp />
          ) : (
            <Table>
              <Colgroup>
                <Col width="80%" />
              </Colgroup>
              <Thead>
                <Tr border="bottom">
                  {titlesOptions.map((title, index) => (
                    <Th
                      key={index}
                      action={title.action}
                      align={title.action ? "center" : "left"}
                    >
                      {title.titleName}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedData.map((row, rowIndex) => (
                  <Tr key={rowIndex} border="bottom">
                    {titlesOptions.map((header, colIndex) => {
                      const cellData = row[header.id as keyof IPosition];
                      return (
                        <Td
                          key={colIndex}
                          align={header.action ? "center" : "left"}
                          onClick={(e) => {
                            if (header.action) {
                              handleAction(e, row, header.id);
                            }
                          }}
                        >
                          {header.action
                            ? renderActionIcon(header.id)
                            : cellData}
                        </Td>
                      );
                    })}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr border="bottom">
                  <Td
                    colSpan={titlesOptions.length}
                    type="custom"
                    align="center"
                  >
                    <Pagination
                      firstEntryInPage={firstEntryInPage}
                      lastEntryInPage={lastEntryInPage}
                      totalRecords={filteredData.length}
                      handleStartPage={handleStartPage}
                      handlePrevPage={handlePrevPage}
                      handleNextPage={handleNextPage}
                      handleEndPage={handleEndPage}
                    />
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
      </Stack>
      {showModal && modalData && (
        <DetailsModal
          data={modalData}
          showModal={showModal}
          handleToggleModal={handleToggleModal}
          labelsOptions={labelsOptions}
        />
      )}
    </Stack>
  );
}
