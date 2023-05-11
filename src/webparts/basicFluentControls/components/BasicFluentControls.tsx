import * as React from 'react';
import styles from './BasicFluentControls.module.scss';
import { IBasicFluentControlsProps } from './IBasicFluentControlsProps';
import { Checkbox, ChoiceGroup, ComboBox, DefaultButton, Dropdown, IStackTokens, Label, PrimaryButton, SearchBox, Slider, Stack, TextField, Toggle } from '@fluentui/react';

const stackTokens:IStackTokens={
  childrenGap:20
}
const stackTokenss:IStackTokens={
  childrenGap:10
}
export default class BasicFluentControls extends React.Component<IBasicFluentControlsProps, {}> {
  public render(): React.ReactElement<IBasicFluentControlsProps> { 

    return (
     <>
     <Stack tokens={stackTokens}>
      <h1 className={styles.h1}>Fluent ui basic control</h1>
      <SearchBox placeholder='Search here'/>

      <form>

        <Label required={true}>First Name:</Label>
        <TextField></TextField>
        <Label required={true}>Last Name:</Label>
        <TextField></TextField>
        <Label required={true}>Description:</Label>
        <TextField multiline={true}></TextField>
        <Dropdown placeholder='Select an option'
        label="Single Selected Dropdown"
        options={[
          {key:"A",text:"Option A"},
          {key:"B",text:"Option B"},
          {key:"C",text:"Option C"},
          {key:"D",text:"Option D"}
        ]}/>
         <Dropdown placeholder='Select an option'
        label="Mutli Selected Dropdown"
        options={[
          {key:"A",text:"Option A"},
          {key:"B",text:"Option B",disabled:true},
          {key:"C",text:"Option C"},
          {key:"D",text:"Option D"}
        ]} multiSelect={true}/>

<Dropdown placeholder='Select an option'
        label="Defualt Selected Dropdown"
        options={[
          {key:"A",text:"Option A"},
          {key:"B",text:"Option B"},
          {key:"C",text:"Option C"},
          {key:"D",text:"Option D"}
        ]} multiSelect={true}
        defaultSelectedKeys={["A","C"]}/>

<ComboBox
        label="ComboBox with allowFreeInput and autocomplete"
        options={[
          {key:"A",text:"Option A"},
          {key:"B",text:"Option B"},
          {key:"C",text:"Option C"},
          {key:"D",text:"Option D"}
        ]}
        
        allowFreeform={true}
        autoComplete="on"
      />

<ChoiceGroup label='Radio Button'
options={[
  {key:"A",text:"Option A"},
  {key:"B",text:"Option B", disabled:true},
  {key:"C",text:"Option C"},
  {key:"D",text:"Option D"}
]}  defaultSelectedKey="D"/>
<Label>Countries Choice:</Label>
<Stack tokens={stackTokenss}>
  <Checkbox label='India'/>
  <Checkbox label='Pakistan'/>
  <Checkbox label='Canada'/>
  <Checkbox label='USA'/>
</Stack>
<Slider label='Slider ' min={1} max={50}/>
<Toggle label="Toggle" onText='ON' offText='OF'/>
<Label>Buttons Type</Label>
<PrimaryButton style={{backgroundColor:'blue'}} text="Primary Button"/>&nbsp;&nbsp;&nbsp;
<DefaultButton style={{backgroundColor:'red'}} text='Default Button'/>&nbsp;&nbsp;&nbsp;

<button>Simple Button</button>
      </form>
     </Stack>
     </>
    );
  }
}
