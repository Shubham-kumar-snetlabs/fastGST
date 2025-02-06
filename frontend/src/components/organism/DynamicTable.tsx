import React, { useState } from "react";
import styled from "styled-components";
import DropdownComponent from "../atoms/DropdownComponent";
import {
  tablePaginationNextNavSVG,
  tablePaginationPrevNavSVG,
} from "../../svg/svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const TableContainer = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  display: flex;
  flex-direction: column;
  border-left: 1px solid #aab8c2;
  border-right: 1px solid #aab8c2;
  border-radius: 12px;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  background: #e1e8ed;
`;

const TableRow = styled.tr``;

const TableCell = styled.td<{ isHeader?: boolean }>`
  padding: ${({ isHeader }) => (isHeader ? "12px 24px" : "18px 24px")};
  text-align: left;
  color: #657786;
  font-weight: ${({ isHeader }) => (isHeader ? "500" : "400")};
  border-top: ${({ isHeader }) => (isHeader ? "1px solid #AAB8C2" : "none")};
  border-bottom: 1px solid #aab8c2;
  font-family: Noto Sans;
  font-size: 16px;
  line-height: 16px;
`;

const PaginationContainer = styled.div`
  width: 100%;
  min-width: 888px;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const RecordsPerPageDiv = styled.div`
  width: 207px;
  height: 32px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RecordsPerPage = styled.div`
  width: 135px;
  height: 16px;
  // font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const PageNavigatorDiv = styled.div`
  width: 138px;
  height: 24px;
  display: flex;
  gap: 24px;
`;

const Navigator = styled.div<{ disabled?: boolean }>`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const CountofPagesDiv = styled.div`
  width: 66px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CurrentPageDiv = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid #b9dcf7;
  background: #e4f4ff;
  color: #4c9eeb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Of = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  color: #657786;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TotalPagesDiv = styled.div`
  width: 10px;
  height: 16px;
  border-radius: 2px;
  color: #657786;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DynamicTableProps {
  headers: string[];
  rows: Array<React.ReactNode[]>;
  width?: string;
  height?: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  headers,
  rows,
  width = "100%",
  height = "auto",
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * rowsPerPage;
  const currentRows = rows.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(0);
  };

  return (
    <Container>
      <TableContainer width={width} height={height}>
        <StyledTable>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index} isHeader>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <tbody>
            {currentRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      <PaginationContainer>
        <RecordsPerPageDiv>
          <RecordsPerPage>Records per page</RecordsPerPage>
          <DropdownComponent
            options={Array.from({ length: 10 }, (_, i) => ({
              value: `${i + 1}`,
              label: ` ${i + 1}`,
            }))}
            width="64px"
            height="32px"
            onChange={handleRowsPerPageChange}
            text={`${rowsPerPage}`}
          />
        </RecordsPerPageDiv>
        <PageNavigatorDiv>
          <Navigator onClick={handlePrevious} disabled={currentPage === 0}>
            {tablePaginationPrevNavSVG}
          </Navigator>
          <CountofPagesDiv>
            <CurrentPageDiv>{currentPage + 1}</CurrentPageDiv>
            <Of>of</Of>
            <TotalPagesDiv>{totalPages}</TotalPagesDiv>
          </CountofPagesDiv>
          <Navigator
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
          >
            {tablePaginationNextNavSVG}
          </Navigator>
        </PageNavigatorDiv>
      </PaginationContainer>
    </Container>
  );
};

export default DynamicTable;
