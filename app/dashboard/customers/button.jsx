'use client';

import { useState } from "react";
import { Card } from '@/app/ui/dashboard/cards';

export default function Button({ totalPaidInvoices }) {
    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(!show)}>Show</button>
            {show && <Card
				title="Collected"
				value={totalPaidInvoices}
				type="collected"
			/>}
        </>
    )
}