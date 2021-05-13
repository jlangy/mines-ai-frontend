import Form from "@rjsf/semantic-ui";
import mineDetailsSchema from "../schemas/mine-details-schema";
import permitterSchema from "../schemas/permitter-schema";
import { Tab } from "semantic-ui-react";
import {
  getMineDataByDetails,
  getMinesDataByPermitter,
} from "../services/ai-service";

const handlePermitterSubmission = async (data, setMineInfo) => {
  const {
    formData: { Permitter: permitter },
  } = data;
  const result = await getMinesDataByPermitter(permitter);
  setMineInfo(result);
};

const handleMineDetailsSubmission = async (data, setMineInfo) => {
  const { formData } = data;
  const result = await getMineDataByDetails(formData);
  setMineInfo(result);
};

const MineForm = ({ setMineInfo }) => (
  <Tab.Pane>
    <Form
      schema={mineDetailsSchema}
      onSubmit={(e) => handleMineDetailsSubmission(e, setMineInfo)}
    />
  </Tab.Pane>
);

const PermitterForm = ({ setMineInfo }) => {
  return (
    <Tab.Pane>
      <Form
        schema={permitterSchema}
        onSubmit={(e) => handlePermitterSubmission(e, setMineInfo)}
      />
    </Tab.Pane>
  );
};

const panes = [
  { menuItem: "Single Mine Form", render: MineForm },
  { menuItem: "Permitter Mines Form", render: PermitterForm },
];

const Forms = ({ setMineInfo }) => {
  return <Tab panes={panes} setMineInfo={setMineInfo} />;
};

export default Forms;
