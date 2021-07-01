import * as React from "react";
import Chip from "../Chip";
import Avatar from "../../Avatar/Avatar";
import Icon from "../../Icon/Icon";

export default (
  <Chip
    uxpId="1"
    // avatar={<Avatar uxpId="1.1"><Icon uxpId="1.1.1">face</Icon></Avatar>}
    deleteIcon={<Icon uxpId="1.1.1" > close </Icon>}
    label="Clickable Deletable Chip" />
);
