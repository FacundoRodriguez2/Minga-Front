import React from "react";
import './roleChange.css'
 import NewRoleAuthor from '../../components/NewRoleAuthor/NewRoleAuthor'
 import NewRoleCompany from '../../components/NewRoleCompany/NewRoleCompany'
 import NewRoleImage from '../../components/NewRoleImage/NewRoleImage'
 import NewRoleIndex from '../../components/NewRoleIndex/NewRoleIndex'


export default function RoleChange(){
  return(
    <>
     <div className='newrole'>
                <div className='author-company'>

                    <NewRoleIndex />
                    <NewRoleAuthor/>
                    <NewRoleCompany />
                </div>
                <NewRoleImage />
            </div> 
    </>
  )
}