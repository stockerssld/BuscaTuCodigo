import { useState } from 'react';
export function useSideBar() {
    const [ sideBarOpen, setSideBarOpen ] = useState(false);
    function ChangeStatusSideBar(){
        setSideBarOpen(!sideBarOpen)
    }
    function ClosedStatusSideBar(){
        setSideBarOpen(!sideBarOpen)
    }
	return {
		sideBarOpen,
        ChangeStatusSideBar,
        ClosedStatusSideBar
	};
}