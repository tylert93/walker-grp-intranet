import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap'
import Wrapper from '../../partials/Wrapper';
import ViewHeader from '../../misc/ViewHeader';
import '../../../css/tools/addressBook.css';
import '../../../css/tools/NASUWTPayScales.css';

const NASUWTPayScales = () => {

    const [role, setRole] = useState()

    const changeRole = (value) => {
        setRole(value)
    }

    const renderTable = () => {
        
            if(role === "Classroom Teachers"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>SPINE POINT</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <thead className="text-center">  
                            <tr className="sub-heading">
                                <th colSpan="3">Main Pay Range</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Min M1</td>
                                <td>£24,373</td>
                                <td>£25,714</td>
                            </tr>
                            <tr>
                                <td>M2</td>
                                <td>£26,298</td>
                                <td>£27,600</td>
                            </tr>
                            <tr>
                                <td>M3</td>
                                <td>£28,413</td>
                                <td>£29,664</td>
                            </tr>
                            <tr>
                                <td>M4</td>
                                <td>£30,599</td>
                                <td>£31,778</td>
                            </tr>
                            <tr>
                                <td>M5</td>
                                <td>£33,010</td>
                                <td>£34,100</td>
                            </tr>
                            <tr>
                                <td>Max M6</td>
                                <td>£35,971</td>
                                <td>£36,961</td>
                            </tr>
                        </tbody>    
                        <thead className="text-center">  
                            <tr className="sub-heading">
                                <th colSpan="3">Upper Pay Range</th>
                            </tr>
                        </thead>
                        <tbody>    
                            <tr>
                                <td>Min U1</td>
                                <td>£37,654</td>
                                <td>£38,690</td>
                            </tr>
                            <tr>
                                <td>U2</td>
                                <td>£39,050</td>
                                <td>£40,124</td>
                            </tr>
                            <tr>
                                <td>Max U3</td>
                                <td>£40,490</td>
                                <td>£41,604</td>
                            </tr>
                        </tbody>
                    </Table>
                )

            }

            if(role === "Teaching and Learning Responsibilities"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>PAYMENT 1 (TLR1)</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Min</td>
                                <td>£8,069</td>
                                <td>£8,291</td>
                            </tr>
                            <tr>
                                <td>Max</td>
                                <td>£13,654</td>
                                <td>£14,030</td>
                            </tr>
                        </tbody>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>PAYMENT 2 (TLR2)</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Min</td>
                                <td>£2,796</td>
                                <td>£2,873</td>
                            </tr>
                            <tr>
                                <td>Max</td>
                                <td>£6,829</td>
                                <td>£7,017</td>
                            </tr>
                        </tbody>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>PAYMENT 3 (TLR) (FIXED TEM)</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Min</td>
                                <td>£555</td>
                                <td>£571</td>
                            </tr>
                            <tr>
                                <td>Max</td>
                                <td>£2,757</td>
                                <td>£2,833</td>
                            </tr>
                        </tbody>
                    </Table>
                )

            }

            if(role === "Special Educational Needs Allowances"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th></th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>SEN (Min)</td>
                                <td>£2,209</td>
                                <td>£2,270</td>
                            </tr>
                            <tr>
                                <td>SEN (Max)</td>
                                <td>£4,359</td>
                                <td>£4,479</td>
                            </tr>
                        </tbody>
                    </Table>
                )

            }

            if(role === "Lead Practitioners"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th></th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Min 1</td>
                                <td>£41,267</td>
                                <td>£42,402</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>£42,301</td>
                                <td>£43,465</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>£43,357</td>
                                <td>£44,550</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>£44,436</td>
                                <td>£45,658</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>£45,543</td>
                                <td>£46,796</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>£46,685</td>
                                <td>£47,969</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>£47,942</td>
                                <td>£49,261</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>£49,048</td>
                                <td>£50,397</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>£50,273</td>
                                <td>£51,656</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>£51,564</td>
                                <td>£52,983</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>£52,902</td>
                                <td>£54,357</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>£54,121</td>
                                <td>£55,610</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>£55,474</td>
                                <td>£57,000</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>£56,857</td>
                                <td>£58,421</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>£58,272</td>
                                <td>£59,875</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>£59,821</td>
                                <td>£61,467</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>£61,195</td>
                                <td>£62,878</td>
                            </tr>
                            <tr>
                                <td>Max 18</td>
                                <td>£62,735</td>
                                <td>£64,461</td>
                            </tr>                            
                        </tbody>
                    </Table>
                )

            }

            if(role === "Unqualified Teachers"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>SCALE POINT</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>Min 1</td>
                                <td>£17,682</td>
                                <td>£18,169</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>£19,739</td>
                                <td>£20,282</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>£21,794</td>
                                <td>£22,394</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>£23,851</td>
                                <td>£24,507</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>£25,909</td>
                                <td>£26,622</td>
                            </tr>
                            <tr>
                                <td>Max 6</td>
                                <td>£27,965</td>
                                <td>£28,735</td>
                            </tr>
                        </tbody>
                    </Table>
                )

            }

            if(role === "Leadership Group"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>SPINE POINT</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>L1</td>
                                <td>£41,065</td>
                                <td>£42,195</td>
                            </tr>
                            <tr>
                                <td>L2</td>
                                <td>£42,093</td>
                                <td>£43,251</td>
                            </tr>
                            <tr>
                                <td>L3</td>
                                <td>£43,144</td>
                                <td>£44,331</td>
                            </tr>
                            <tr>
                                <td>L4</td>
                                <td>£44,218</td>
                                <td>£45,434</td>
                            </tr>
                            <tr>
                                <td>L5</td>
                                <td>£45,319</td>
                                <td>£46,566</td>
                            </tr>
                            <tr>
                                <td>L6</td>
                                <td>£46,457</td>
                                <td>£47,735</td>
                            </tr>
                            <tr>
                                <td>L7</td>
                                <td>£47,707</td>
                                <td>£49,019</td>
                            </tr>
                            <tr>
                                <td>L8</td>
                                <td>£48,808</td>
                                <td>£50,151</td>
                            </tr>
                            <tr>
                                <td>L9</td>
                                <td>£50,026</td>
                                <td>£51,402</td>
                            </tr>
                            <tr>
                                <td>L10</td>
                                <td>£51,311</td>
                                <td>£52,723</td>
                            </tr>
                            <tr>
                                <td>L11</td>
                                <td>£52,643</td>
                                <td>£54,091</td>
                            </tr>
                            <tr>
                                <td>L12</td>
                                <td>£53,856</td>
                                <td>£55,338</td>
                            </tr>
                            <tr>
                                <td>L13</td>
                                <td>£55,202</td>
                                <td>£56,721</td>
                            </tr>
                            <tr>
                                <td>L14</td>
                                <td>£56,579</td>
                                <td>£58,135</td>
                            </tr>
                            <tr>
                                <td>L15</td>
                                <td>£57,986</td>
                                <td>£59,581</td>
                            </tr>
                            <tr>
                                <td>L16</td>
                                <td>£59,528</td>
                                <td>£61,166</td>
                            </tr>
                            <tr>
                                <td>L17</td>
                                <td>£60,895</td>
                                <td>£62,570</td>
                            </tr>
                            <tr>
                                <td>L18</td>
                                <td>£62,426</td>
                                <td>£64,143</td>
                            </tr>
                            <tr>
                                <td>L19</td>
                                <td>£63,975</td>
                                <td>£65,735</td>
                            </tr>
                            <tr>
                                <td>L20</td>
                                <td>£65,561</td>
                                <td>£67,364</td>
                            </tr>
                            <tr>
                                <td>L21</td>
                                <td>£67,183</td>
                                <td>£69,031</td>
                            </tr>
                            <tr>
                                <td>L22</td>
                                <td>£68,851</td>
                                <td>£70,745</td>
                            </tr>
                            <tr>
                                <td>L23</td>
                                <td>£70,556</td>
                                <td>£72,497</td>
                            </tr>
                            <tr>
                                <td>L24</td>
                                <td>£72,306</td>
                                <td>£74,295</td>
                            </tr>
                            <tr>
                                <td>L25</td>
                                <td>£74,103</td>
                                <td>£76,141</td>
                            </tr>
                            <tr>
                                <td>L26</td>
                                <td>£75,936</td>
                                <td>£78,025</td>
                            </tr>
                            <tr>
                                <td>L27</td>
                                <td>£77,818</td>
                                <td>£79,958</td>
                            </tr>
                            <tr>
                                <td>L28</td>
                                <td>£79,748</td>
                                <td>£81,942</td>
                            </tr>
                            <tr>
                                <td>L29</td>
                                <td>£81,723</td>
                                <td>£83,971</td>
                            </tr>
                            <tr>
                                <td>L30</td>
                                <td>£83,757</td>
                                <td>£86,061</td>
                            </tr>
                            <tr>
                                <td>L31</td>
                                <td>£85,826</td>
                                <td>£88,187</td>
                            </tr>
                            <tr>
                                <td>L32</td>
                                <td>£87,960</td>
                                <td>£90,379</td>
                            </tr>
                            <tr>
                                <td>L33</td>
                                <td>£90,145</td>
                                <td>£92,624</td>
                            </tr>
                            <tr>
                                <td>L34</td>
                                <td>£92,373</td>
                                <td>£94,914</td>
                            </tr>
                            <tr>
                                <td>L35</td>
                                <td>£94,669</td>
                                <td>£97,273</td>
                            </tr>
                            <tr>
                                <td>L36</td>
                                <td>£97,013</td>
                                <td>£99,681</td>
                            </tr>
                            <tr>
                                <td>L37</td>
                                <td>£99,424</td>
                                <td>£102,159</td>
                            </tr>
                            <tr>
                                <td>L38</td>
                                <td>£101,885</td>
                                <td>£104,687</td>
                            </tr>
                            <tr>
                                <td>L39</td>
                                <td>£104,368</td>
                                <td>£107,239</td>
                            </tr>
                            <tr>
                                <td>L40</td>
                                <td>£106,972</td>
                                <td>£109,914</td>
                            </tr>
                            <tr>
                                <td>L41</td>
                                <td>£109,644</td>
                                <td>£112,660</td>
                            </tr>
                            <tr>
                                <td>L42</td>
                                <td>£112,392</td>
                                <td>£115,483</td>
                            </tr>
                            <tr>
                                <td>L43</td>
                                <td>£114,060</td>
                                <td>£117,197</td>
                            </tr>
                        </tbody>
                    </Table>
                )

            }

            if(role === "Headteachers"){

                return(
                    <Table className="pay-scale-table" striped hover>
                        <thead className="text-center">
                            <tr className="heading">
                                <th>GROUP</th>
                                <th>RANGE OF SPINE POINTS</th>
                                <th>1 SEPT 2019 TO 31 AUG 2020</th>
                                <th>1 SEPT 2020 TO 31 AUG 2021</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>1</td>
                                <td>L6 – L18</td>
                                <td>£46,457 - £61,808</td>
                                <td>£47,735 - ££63,508</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>L8 – L21</td>
                                <td>£48,808 - £66,517</td>
                                <td>£50,151 - £68,347</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>L11 – L24</td>
                                <td>£52,643 - £71,590</td>
                                <td>£54,091 - £73,559</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>L14 – L27</td>
                                <td>£56,579 - £77,048</td>
                                <td>£58,135 - £79,167</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>L18 – L31</td>
                                <td>£62,426 - £84,976</td>
                                <td>£64,143 - £87,313</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>L21 – L35</td>
                                <td>£67,183 - £93,732</td>
                                <td>£69,031 - £96,310</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>L24 – L39</td>
                                <td>£72,306 - £103,334</td>
                                <td>£74295 - £106,176</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>L28 – L43</td>
                                <td>£79,748 - £114,060</td>
                                <td>£81,942 - £117,197</td>
                            </tr>
                        </tbody>
                    </Table>
                )

            }
  
    }

    return(
        
        <Wrapper>

            <ViewHeader title="NASUWT Pay Scales" />

            <div className="row">

                <div className="col-12">
                    <Form className="mb-5">
                        <Form.Group controlId="role" className="mt-3">
                            <Form.Label><h4>Role :</h4></Form.Label>
                            <Form.Control as="select" onChange={e => {changeRole(e.target.value)}} value={role}>
                                <option>Select role</option>
                                <option>Classroom Teachers</option>
                                <option>Teaching and Learning Responsibilities</option>
                                <option>Special Educational Needs Allowances</option>
                                <option>Lead Practitioners</option>
                                <option>Unqualified Teachers</option>
                                <option>Leadership Group</option>
                                <option>Headteachers</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>

                    {renderTable()}
                </div>

            </div>

        </Wrapper>

    )
    
}

export default NASUWTPayScales