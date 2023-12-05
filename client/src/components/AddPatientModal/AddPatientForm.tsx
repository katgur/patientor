import { useState, SyntheticEvent } from "react";

import { TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent, Stack } from '@mui/material';

import { PatientFormValues, Gender } from "../../types";

interface Props {
  onCancel: () => void;
  onSubmit: (values: PatientFormValues) => void;
}

interface GenderOption {
  value: Gender;
  label: string;
}

const genderOptions: GenderOption[] = Object.values(Gender).map(v => ({
  value: v, label: v.toString()
}));

const AddPatientForm = ({ onCancel, onSubmit }: Props) => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [ssn, setSsn] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState(Gender.Other);

  const onGenderChange = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    if (typeof event.target.value === "string") {
      const value = event.target.value;
      const gender = Object.values(Gender).find(g => g.toString() === value);
      if (gender) {
        setGender(gender);
      }
    }
  };

  const addPatient = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit({
      name,
      occupation,
      ssn,
      dateOfBirth,
      gender
    });
  };

  return (
    <div>
      <form onSubmit={addPatient}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <TextField
            label="Social security number"
            fullWidth
            value={ssn}
            onChange={({ target }) => setSsn(target.value)}
          />
          <TextField
            label="Date of birth"
            placeholder="YYYY-MM-DD"
            fullWidth
            value={dateOfBirth}
            onChange={({ target }) => setDateOfBirth(target.value)}
          />
          <TextField
            label="Occupation"
            fullWidth
            value={occupation}
            onChange={({ target }) => setOccupation(target.value)}
          />

          <Stack>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              fullWidth
              value={gender}
              onChange={onGenderChange}
            >

              {genderOptions.map(option =>
                <MenuItem
                  key={option.label}
                  value={option.value}
                >
                  {option.label
                  }</MenuItem>
              )}
            </Select>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              color="primary"
              variant="outlined"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Stack>
        </Stack>

      </form>
    </div>
  );
};

export default AddPatientForm;