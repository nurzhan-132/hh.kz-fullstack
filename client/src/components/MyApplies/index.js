import MyApply from "./MyApply";
import { useSelector } from "react-redux";
import PreLoader from '@/components/PreLoader';
import { useState, useEffect } from "react";

export default function MyApplies() {

    const applies = useSelector(state => state.apply.applies)

    const [sortDirection, setSortDirection] = useState("desc")
    const [sortBy, setSortBy] = useState("updatedAt")
    const [sortedApplies, setSortedApplies] = useState([])
    // let sortedApplies = [...applies].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt) )
    // useEffect(() => {
    //     let temp = [...applies].sort((a, b) => {
    //         let aValue, bValue
    //         if(sortBy === "updatedAt") {
    //             aValue = new Date(a[sortBy])
    //             bValue = new Date(b[sortBy])
    //         } else if(sortBy === "vacancy.name") {
    //             aValue = a[sortBy]
    //             bValue = b[sortBy]
    //         } else if(sortBy === "status") {
    //             aValue = a[sortBy]
    //             bValue = b[sortBy]
    //         }
    //         // const aValue = sortBy === "status" ? a[sortBy] : new Date(a[sortBy]);
    //         // const bValue = sortBy === "status" ? b[sortBy] : new Date(b[sortBy]);

    //         return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    //     });
    //     setSortedApplies(temp)
    // }, [sortBy, sortDirection])
    useEffect(() => {
        // Ensure applies is not empty before sorting
        if (applies.length > 0) {
            const sorted = [...applies].sort((a, b) => {
                let aValue = sortBy === 'vacancy' ? a.vacancy.name : a[sortBy]
                let bValue = sortBy === 'vacancy' ? b.vacancy.name : b[sortBy]
                return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            });

            setSortedApplies(sorted);
        } else {
            setSortedApplies([]); // Handle empty applies case
        }
    }, [applies, sortBy, sortDirection]);

    const showApplies = sortedApplies.map((item, index) => <MyApply key={index} item={item} />);

    const handleSort = (sortKey) => {
        setSortBy(sortKey)
        setSortDirection(prevSortDirection => prevSortDirection === 'asc' ? "desc" : "asc")
    }

    return (
        <div className="table">
            <div className="row row-header flex">
                <div className={`col ${sortDirection === 'desc' ? "sort-desc" : "sort-asc"}`} onClick={() => handleSort("status")}>
                    Статус
                    {sortBy === "status" && <img src="/images/arrow-right-icon.svg" alt=">" />}
                </div>
                <div className={`col ${sortDirection === 'desc' ? "sort-desc" : "sort-asc"}`} onClick={() => handleSort("vacancy")}>
                    Вакансия
                    {sortBy === "vacancy" && <img src="/images/arrow-right-icon.svg" alt=">" />}
                </div>
                <div className={`col ${sortDirection === 'desc' ? "sort-desc" : "sort-asc"}`} onClick={() => handleSort("updatedAt")}>
                    Дата
                    {sortBy === "updatedAt" && <img src="/images/arrow-right-icon.svg" alt=">" />}
                </div>
            </div>
            {showApplies}
        </div>
    );
}


