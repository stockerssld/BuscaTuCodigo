import React, { useContext } from "react";
import { Link } from "react-router-dom";
export default function NoAuth() {
    return (
        <>
            <div style={{ padding: 12, flex: 1, display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: "8%", backgroundColor: 'red' }}>
                NoAuth
                </div>
                <div>
                </div>
            </div>
        </>
    );
}
