import React from 'react';

const Settlement = ({ transactions, members }) => {
  const calculateBalances = () => {
    const balances = {};
    members.forEach((member) => {
      balances[member.id] = { total: 0, owes: {} };
      members.forEach((other) => {
        if (other.id !== member.id) {
          balances[member.id].owes[other.id] = 0;
        }
      });
    });

    transactions.forEach((transaction) => {
      const total = Object.values(transaction.contributions).reduce((sum, amount) => sum + parseFloat(amount), 0);
      const share = total / members.length;

      members.forEach((member) => {
        const contribution = parseFloat(transaction.contributions[member.id] || 0);
        const balanceChange = contribution - share;
        balances[member.id].total += balanceChange;

        members.forEach((other) => {
          if (other.id !== member.id) {
            balances[member.id].owes[other.id] -= balanceChange / (members.length - 1);
            balances[other.id].owes[member.id] += balanceChange / (members.length - 1);
          }
        });
      });
    });

    return balances;
  };

  const balances = calculateBalances();

  return (
    <div>
    <h3>Settlement</h3>
    <div className="settlement">
      
      {members.map((member) => (
        <div key={member.id} className="balance">
          <strong>{member.name}</strong>: {balances[member.id].total.toFixed(2)}
          <ul>
            {members.map((other) => (
              other.id !== member.id && (
                <li key={other.id}>
                  owes {other.name}: {balances[member.id].owes[other.id].toFixed(2)}
                </li>
              )
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Settlement;
