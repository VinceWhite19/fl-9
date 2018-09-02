function userCard(index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = index;
    const tax = 0.005;

    return {

        getCardOptions: function () {
            console.log({
                'key': key,
                'balance': balance,
                'transactionLimit': transactionLimit,
                'historyLogs': historyLogs
            })
        },

        putCredits: function (value) {
            balance += value;
            addHistoryLogs('Received credits', value, new Date().toLocaleString('en-GB', {
                timeZone: 'UTC'
            }));
        },

        takeCredits: function (value) {

            addHistoryLogs('Withdrawal of credits', value, new Date().toLocaleString('en-GB', {
                timeZone: 'UTC'
            }));
            balance -= value;

        },

        setTransactionLimit: function (value) {
            transactionLimit = value;
            addHistoryLogs('Transaction limit change', value, new Date().toLocaleString('en-GB', {
                timeZone: 'UTC'
            }))
        },

        transferCredits: function (value, card) {
            const taxIncl = value * tax + value;

            if (taxIncl > balance) {
                alert(`Error: balance exceeded.`);
            } else if (taxIncl > transactionLimit) {
                alert(
                    `Error: transaction limit exceeded.`);
            } else {
                this.takeCredits(taxIncl);
                card.putCredits(value);
            }
        }

    }

    /* keep information in history log */
    function addHistoryLogs(type, amount, time) {
        historyLogs.push({
            'operationType': type,
            'credits': amount,
            'operationTime': time
        })
    }


}

class UserAccount {
    constructor(name) {
        this.userName = name;
        this.userCards = [];
        const maxNumber = 3;
    }

    addCard() {
        if (this.userCards.length < this.maxNumber) {
            this.userCards.push(userCard());
        } else {
            alert('Error: number of cards exceeded.');
        }
    }

    getCardByKey(index) {
        return this.userCard[index];
    }
}