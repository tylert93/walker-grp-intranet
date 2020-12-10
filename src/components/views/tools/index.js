import React from 'react';
import Wrapper from '../../partials/Wrapper';
import ToolIcon from '../../tools/ToolIcon';
import '../../../css/tools/index.css';
import addressBook from '../../../images/address-book.svg';
import safe from '../../../images/safe2.svg';
import calculator from '../../../images/calculator3.svg';
import tag from '../../../images/tag.svg';
import contract from '../../../images/contract3.svg';
import ViewHeader from '../../misc/ViewHeader';

const Tools = () => {

    return (

        <Wrapper>

            <ViewHeader title="Tools" />

            <div className="row">

                <ToolIcon svg={addressBook} colour="firewatch" Alt="Address Book" to="/tools/address-book" title="Address Book"/>
                            
                <ToolIcon svg={contract} colour="suzy" Alt="Contract Deal" to="/tools/contract-deal" title="Contract Deal"/>

                <ToolIcon svg={calculator} colour="lush" Alt="Calculator" to="/tools/payroll-calculator" title="Payroll Calculator" />

                <ToolIcon svg={safe}  colour="juicy-orange" Alt="Permanent Deal" to="/tools/permanent-deal" title="Permanent Deal" />

                <ToolIcon svg={tag} colour="cool-blues" Alt="Calculator" to="/tools/contract-rate-calculator" title="Rate Calculator" />
        
            </div>

        </Wrapper>
        
    )
    
}

export default Tools