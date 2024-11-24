import {FC} from "react";
import {baseUrlImg} from "../../../constants";

import './CompanyDetails.css'

interface ICompany {
    logo_path: string
}

const CompanyDetails: FC<{ company: ICompany }> = ({company}) => {
    const {logo_path} = company

    return (
        <div className={'company'}>
            {logo_path && <img src={baseUrlImg + logo_path} alt="company name"/>}
            <div className={'company-separator'}></div>
        </div>
    );
};

export {CompanyDetails};