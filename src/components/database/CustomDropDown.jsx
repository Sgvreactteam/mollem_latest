import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { TbSortAscendingNumbers } from "react-icons/tb";
import { TbSortDescendingNumbers } from "react-icons/tb";

function CustomDropDown(props) {
    const { t } = useTranslation();


  return (
    <div className="mr-4 lg:mb-0 mb-4">
    <FormControl className="app-dropdown">
      <Select
        variant="outlined"
        value={props.value}
        sx={{
          borderRadius: "50px",
          height: "40px",
        }}
      >
        <MenuItem disabled value={props.value}>
          {t(props.type.toLowerCase())}
        </MenuItem >
        {
            props.menuItems && props.menuItems.map((item,index)=>{
                return <MenuItem value={item} onClick={()=>{
                    props.onSelect(item,props.type)
                }}>{item}</MenuItem>
            }) 
        }
      </Select>
    </FormControl>{" "}
  </div>
  )
}

export default CustomDropDown