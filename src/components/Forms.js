import Form from "@rjsf/semantic-ui";
import {useState} from 'react';
import mineDetailsSchema from "../schemas/mine-details-schema";
import permitterSchema from "../schemas/permitter-schema";
import mineDetailsUiSchema from "../schemas/mine-details-uischema";
import permitterUiSchema from "../schemas/permitter-uischema";
import { Tab } from "semantic-ui-react";
import {
  getMineDataByDetails,
} from "../services/ai-service";
import {mineNameValidate, permiteeValidate} from '../helpers';
import { findMineByName, findMinesByPermittee } from "../database-mock/services";

const handlePermitterSubmission = async (data, setMineInfo, setKey) => {
  const {
    formData: { Permitter: permitter },
  } = data;
  const minesDetails = findMinesByPermittee(permitter);
  const result = await Promise.all(minesDetails.map(mine => getMineDataByDetails(mine)))
  console.log('result is', result)
  const minesWithRisk = minesDetails.map((mine,i) => {
    mine.risk = result[i];
    return mine;
  })
  setMineInfo(minesWithRisk);
  setKey(Date.now())
};

const handleMineDetailsSubmission = async (data, setMineInfo, setKey) => {
  const { formData: {Name: mineName} } = data;
  // UI validation running through rjsf, see helpers
  const mineDetails = findMineByName(mineName);
  const result = await getMineDataByDetails(mineDetails);
  mineDetails.risk = result;
  setMineInfo([mineDetails]);
  setKey(Date.now())
};

const MineForm = ({ setMineInfo, setKey, formKey }, schema, onSubmit, validate, uiSchema) => (
  <Tab.Pane>
    <Form
      schema={schema}
      onSubmit={(e) => onSubmit(e, setMineInfo, setKey)}
      validate={validate}
      key={formKey}
      uiSchema={uiSchema}
      showErrorList={false}
    />
  </Tab.Pane>
);

const panes = [
  { menuItem: "Single Mine Form", render: (props) => MineForm(props, mineDetailsSchema, handleMineDetailsSubmission, mineNameValidate, mineDetailsUiSchema ) },
  { menuItem: "Permitter Mines Form", render: (props) => MineForm(props, permitterSchema, handlePermitterSubmission, permiteeValidate, permitterUiSchema ) },
];

const Forms = ({ setMineInfo }) => {
  // Clearing errors through key is the recommended approach, see https://github.com/rjsf-team/react-jsonschema-form/issues/953
  const [key, setKey] = useState(Date.now())
  return <Tab panes={panes} setMineInfo={setMineInfo} formKey={key} setKey={setKey} />;
};

export default Forms;
