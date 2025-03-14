import React from "react";
// import { formatAmount } from "@/lib/utils";
// import CountUp from 'react-countup';
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";


const TotalBalanceBox = ({
  accounts=[],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank accounts: {totalBanks}
        
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total current balance</p>
        </div>
        <p className="total-balance-amount flex-center gap-2">
        <AnimatedCounter amount={totalCurrentBalance} />
        </p>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
