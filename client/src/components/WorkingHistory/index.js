'use strict'

import { dateFormatterMonthYear } from '@/utils/formatter'

export default function WorkingHistory({workingHistory, remove}) {
    return(
        <div className="working-history">
            <span>{dateFormatterMonthYear(workingHistory.start_date)} - {dateFormatterMonthYear(workingHistory.end_date)}</span>
            <h4>{workingHistory.company_name}</h4>
            <p>{workingHistory.company_description}</p>
            <span onClick={() => remove(workingHistory)}>Удалить</span>
        </div>
    )
}