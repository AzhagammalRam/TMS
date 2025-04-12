import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const HopfLetterUploadModal = ({ open, handleClose, handleSubmit }) => {
  const [refNumber, setRefNumber] = useState('');
  const [docType, setDocType] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = () => {
    if (refNumber && docType && file) {
      // You can send this data to backend via FormData
      const formData = new FormData();
      formData.append('referenceNumber', refNumber);
      formData.append('documentType', docType);
      formData.append('file', file);
      handleSubmit(formData);

      // Reset and close
      setRefNumber('');
      setDocType('');
      setFile(null);
      handleClose();
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" className='title-clr' gutterBottom>
          Upload Document
        </Typography>

        <TextField
          label="Reference Number"
          fullWidth
          margin="normal"
          value={refNumber}
          onChange={(e) => setRefNumber(e.target.value)}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="doc-type-label">Document Type</InputLabel>
          <Select
            labelId="doc-type-label"
            value={docType}
            label="Document Type"
            onChange={(e) => setDocType(e.target.value)}
          >
            <MenuItem value="PDF">PDF</MenuItem>
            <MenuItem value="DOC">DOC</MenuItem>
            <MenuItem value="CSV">CSV</MenuItem>
          </Select>
        </FormControl>

        <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {file && <Typography variant="body2" sx={{ mt: 1 }}>{file.name}</Typography>}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default HopfLetterUploadModal;
