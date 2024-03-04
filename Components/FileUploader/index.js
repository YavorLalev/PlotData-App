import Button from "@/Components/Button";
import { useRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: none;
`;
export default function FileUploader({ handleFile }) {
  const hiddenFileInput = useRef(null);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  }

  return (
    <>
      <Button onClick={handleClick}>Choose a file</Button>
      <StyledInput
        type="file"
        accept=".csv"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </>
  );
}
