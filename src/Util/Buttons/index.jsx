import styled from 'styled-components'
import {Error,Info,Link,Primary,Secundary,Success,Warning} from './../Color'
export const Button=styled.button`
    display: inline-block;
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    padding: 0 16px;
    border-radius: 2px;
    border-color: ${props=>{return props.Link?'transparent' : ''}};
    box-shadow:  ${props=>{return props.Link?'none' : ''}};
    font-family: inherit;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-appearance: none;
    -webkit-box-shadow:   ${props=>{return props.Link?'none' : ''}};
    color:   ${props=>{return props.Link?'#1890ff' : '#fff'}};
    background:  ${props=>{return props.Primary?'#8628b1' : 
                    props.Secundary?'#b16d28':
                    props.Info?'#2839b1':
                    props.Success?'#3aa942': 
                    props.Error?'#ef3a3a' : 
                    props.Warning?'#efdb2a': 
                    props.Link?'transparent':
                    props.Background || 'null'}};

    border-color:  ${props=>{return props.Primary?'#b40fff': 
                    props.Secundary?'#b16d28':
                    props.Info?'#2839b1':
                    props.Success?'#11cc1e': 
                    props.Error?'#ef3a3a': 
                    props.Warning?'#efdb2a':
                    props.Background || 'null'}};
    
    &:link, &:visited, &:focus{
        background: ${props=>{return props.Primary?'#b40fff': 
                    props.Secundary?'#e88016':
                    props.Info?'#0043ff':
                    props.Success?'#11cc1e': 
                    props.Error?'#ff1e1e':
                    props.Warning?'#ffeb3b':
                    props.Fha || 'null'}};
    }
    &:hover {
        background: ${props=>{return props.Primary?'#b40fff': 
                    props.Secundary?'#e88016':
                    props.Info?'#0043ff':
                    props.Success?'#11cc1e': 
                    props.Error?'#ff1e1e': 
                    props.Warning?'#ffeb3b':
                    props.Fha || 'null'}};
    }
    
    &:active{
        background: ${props=>{return props.Primary?'#b40fff': 
                    props.Secundary?'#e88016':
                    props.Info?'#0043ff':
                    props.Success?'#11cc1e': 
                    props.Error?'#ff1e1e': 
                    props.Warning?'#ffeb3b':
                    props.Fha || 'null'}};
    }


  
`