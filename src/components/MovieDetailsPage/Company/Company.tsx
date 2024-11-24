import {FC} from "react";
import {IMovieDetails} from "../../../interfaces";
import {CompanyDetails} from "../CompanyDetails/CompanyDetails";

import './Company.css'

const Company: FC<{ movieDetails: IMovieDetails }> = ({movieDetails}) => {
    const {production_companies} = movieDetails

    return (
        <div className="companies">
            {production_companies.map(company => <CompanyDetails key={company.id} company={company}/>)}
        </div>
    );
};

export {Company};