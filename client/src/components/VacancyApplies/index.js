'use client'

import Apply from "./apply";
import { useSelector } from "react-redux";
import PreLoader from '@/components/PreLoader';
import { useState, useEffect } from "react";

export default function Applies({applies}) {

    const showApplies = applies.map((item, index) => <Apply key={index} item={item} />);

    return (
        <div className="applies">
        {showApplies.length === 0 && "Откликов не найдено"}
            {showApplies}
        </div>
    );
}


