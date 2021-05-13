import Form from '@rjsf/semantic-ui';
import mineDetailsSchema from '../schemas/mine-details-schema';
import permitterSchema from '../schemas/permitter-schema';
import { Tab } from 'semantic-ui-react';

const MineForm = () => (
  <Tab.Pane>
      <Form 
        schema={mineDetailsSchema}
      />
  </Tab.Pane>
);

const PermitterForm = () => (
  <Tab.Pane>
    <Form 
      schema={permitterSchema}
    />
  </Tab.Pane>
);

const panes = [
  { menuItem: 'Single Mine Form', render: MineForm },
  { menuItem: 'Permitter Mines Form', render: PermitterForm },
]

const Forms = () => {
  return (
    <Tab panes={panes}/>
  )
}

export default Forms;