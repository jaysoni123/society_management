import React, { useState } from 'react'
import societyData from "./society_data"
import "./content.css"

const Content = () => { 

    const selectedFamily = (value) => {
        // let family = value.map(( val ) => {
        //     return(
        //         <h1>hello</h1>

        // });

      //  return family;
    }

const showAllBlocks = societyData.map(( value ) => {
    return(
        <tr>
            <th scope="row">{value.block}</th>
            <td>{value.data[0].name}</td>
            <td>
                <button onClick={() => {
                    selectedFamily(value)
                }}><i className="fa fa-arrow-right text-success" aria-hidden="true"></i></button>
            </td>
        </tr>
    );
});

const [selectedData, updateSelectedData] = useState(showAllBlocks);

const societyTable = <table className="table table-bordered table-striped mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Block</th>
                                <th scope="col">Owner Name</th>
                                <th scope="col">View Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedData}
                        </tbody>
                    </table>

const familyTable = <table className="table table-bordered table-striped mb-0">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">View Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedData}
                        </tbody>
                    </table>

    return(
        <div className="row justify-content-center">
            <div className="col-10">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-bordered table-striped mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Block</th>
                                <th scope="col">Owner Name</th>
                                <th scope="col">View Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedData}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Content;