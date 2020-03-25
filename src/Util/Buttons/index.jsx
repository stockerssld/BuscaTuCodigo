import styled from 'styled-components'
import {Error,Info,Link,Primary,Secundary,Success,Warning} from './../Color'
export const Button=styled.button`
    display: inline-block;
    height: ${props=>{return props.Size=='Large' ?'40px' : props.Size=='Small'?'24px': props.Size==''?'32px':'32px'}};
    width:   ${props=>{return props.Block?'100%':'null'}};
    line-height:  ${props=>{return props.Size=='Large' ?'38px' : props.Size=='Small'?'22px':'30px' }};
    font-size:  ${props=>{return props.Size=='Large' ?'16px' : props.Size=='Small'?'10px':'14px' }};;
    padding:  ${props=>{return props.Size=='Large' ?'0 24px' : props.Size=='Small'?'0 8px':'0 16px' }};
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
    margin-right: 8px;
    margin-left: 8px;
    margin-bottom: 12px;
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