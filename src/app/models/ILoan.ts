export interface ILoan {
    loanId: string; // Unique identifier for the loan
    amount: number; // Total amount of money granted
    remainingAmount: number; // remaining amount to pay
    type: 'individual' | 'group'; // loan type 
    interestRate: number; // Percentage applied to the loan amount
    term: number; // Total duration of the loan in months
    startDate: Date; // Date when the loan is issued
    endDate: Date; // Estimated date for loan completion
    nextPaymentDate: Date; // next payment date
    status: 'active' | 'paid' | 'delinquent'; // Current status of the loan
    paymentFrequency: 'monthly' | 'bi-weekly' | 'weekly'; // Frequency of payments
    installmentAmount: number; // Amount to be paid in each installment
    name?: string;
    collateral?: string; // Optional details of any assets provided as loan security
    notes?: string; // Optional field for additional comments or details
  }