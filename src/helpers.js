import { redIcon, greenIcon } from "./components/Icons";
import { findMineByName, findMinesByPermittee } from "./database-mock/services";

export const getRiskIcon = (risk) => {
  if (risk === "Yes") return redIcon;
  return greenIcon;
};

export const getRiskColour = (risk) => {
  if (risk === "Yes") return "red";
  return "green";
};

export const swapCoords = (coords) =>
  coords.map((coordPair) => [coordPair[1], coordPair[0]]);

export const mineNameValidate = (formData, errors) => {
  const { Name: mineName } = formData;
  const mineDetails = findMineByName(mineName);
  if (!mineDetails)
    errors.Name.addError(
      "Could not find mine in the database. Please check the name and try again."
    );
  return errors;
};

export const permiteeValidate = (formData, errors) => {
  const { Permitter: permitter } = formData;
  const mineDetails = findMinesByPermittee(permitter);
  if (!mineDetails)
    errors.Permitter.addError(
      "Could not find permitter in the database. Please check the permittee and try again."
    );
  return errors;
};
