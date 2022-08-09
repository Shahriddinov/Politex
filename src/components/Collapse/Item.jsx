/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Collapse } from "antd";
import "./index.css";

const Item = ({ header, children, ...props }) => (
  <Collapse.Panel {...props} header={header}>
    {children}
  </Collapse.Panel>
);

export default Item;
