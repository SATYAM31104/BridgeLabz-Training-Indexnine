import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

# Load the dataset
df = pd.read_csv('HDFC_Dataset.csv')

print("--- Q6. Probability: Self-Employed AND Loan > 10,00,000 ---")
# Count (Self-Employed AND Loan_Amount > 10,00,000)
event_match = df[(df['Employment_Status'] == 'Self-Employed') & (df['Loan_Amount'] > 1000000)]
prob_q6 = len(event_match) / len(df)
print(f"Probability: {prob_q6:.4f} ({prob_q6*100:.2f}%)")
print("-" * 50)

print("\n--- Q7. Loan_Amount Distribution ---")
plt.figure(figsize=(10, 6))
sns.histplot(df['Loan_Amount'], kde=True, color='blue')
plt.title('Distribution of Loan Amount')
plt.xlabel('Loan Amount')
plt.ylabel('Frequency')
plt.show() # In notebook this will display inline
print("Graph generated. Shape interpretation: Check if it's bell-shaped (Normal) or Skewed (Right/Left).")
print("-" * 50)

print("\n--- Q8. Normality Test (Shapiro-Wilk) on Applicant_Income ---")
# Null Hypothesis (H0): The data is normally distributed.
# Alternative Hypothesis (H1): The data is NOT normally distributed.
stat, p_value = stats.shapiro(df['Applicant_Income'])
print(f"Statistic: {stat:.4f}, p-value: {p_value:.10f}")
if p_value > 0.05:
    print("p-value > 0.05: Fail to reject H0. Data looks Normal.")
else:
    print("p-value <= 0.05: Reject H0. Data is NOT Normal.")
print("-" * 50)

print("\n--- Q9. P(Urban | Approved) ---")
# P(Urban | Approved) = P(Urban AND Approved) / P(Approved)
approved_df = df[df['Loan_Status'] == 'Approved']
urban_approved_df = approved_df[approved_df['Property_Area'] == 'Urban']

p_urban_given_approved = len(urban_approved_df) / len(approved_df)
print(f"P(Urban | Approved): {p_urban_given_approved:.4f} ({p_urban_given_approved*100:.2f}%)")
print("-" * 50)

print("\n--- Q10. Bayes' Theorem: P(Good Credit | Approved) ---")
# P(A|B) = P(B|A) * P(A) / P(B)
# A = Good Credit (Credit_History = 1)
# B = Approved (Loan_Status = 'Approved')

p_good_credit = len(df[df['Credit_History'] == 1]) / len(df) # P(A)
p_approved = len(df[df['Loan_Status'] == 'Approved']) / len(df) # P(B)

# P(Approved | Good Credit) -> Calculated from data
good_credit_df = df[df['Credit_History'] == 1]
p_approved_given_good_credit = len(good_credit_df[good_credit_df['Loan_Status'] == 'Approved']) / len(good_credit_df)

# Bayes Calculation
p_good_credit_given_approved_bayes = (p_approved_given_good_credit * p_good_credit) / p_approved

# Direct Calculation for Verification
p_good_credit_given_approved_direct = len(approved_df[approved_df['Credit_History'] == 1]) / len(approved_df)

print(f"Using Bayes' Theorem: {p_good_credit_given_approved_bayes:.4f}")
print(f"Direct Verification:  {p_good_credit_given_approved_direct:.4f}")
print("-" * 50)

print("\n--- Q11. Covariance Matrix ---")
cols_cov = ['Applicant_Income', 'Loan_Amount', 'CIBIL_Score', 'Debt_to_Income_Ratio']
cov_matrix = df[cols_cov].cov()
print(cov_matrix)
print("\nInterpretation:")
print("Positive value: Variables move in same direction.")
print("Negative value: Variables move in opposite direction.")
print("-" * 50)

print("\n--- Q12. Pearson Correlation ---")
corr_loan_household = df['Loan_Amount'].corr(df['Annual_Household_Income'])
corr_loan_cibil = df['Loan_Amount'].corr(df['CIBIL_Score'])

print(f"Corr(Loan_Amount, Annual_Household_Income): {corr_loan_household:.4f}")
print(f"Corr(Loan_Amount, CIBIL_Score): {corr_loan_cibil:.4f}")
print("Interpretation: Closer to 1 or -1 is strong, 0 is no linear correlation.")
print("-" * 50)

print("\n--- Q13. Hypothesis Testing (T-test) ---")
# H0: Mean Loan_Amount (Grad) = Mean Loan_Amount (Not Grad)
# H1: Mean Loan_Amount (Grad) != Mean Loan_Amount (Not Grad)

grad_loans = df[df['Education'] == 'Graduate']['Loan_Amount']
not_grad_loans = df[df['Education'] == 'Not Graduate']['Loan_Amount']

t_stat, p_val_ttest = stats.ttest_ind(grad_loans, not_grad_loans)
print(f"T-statistic: {t_stat:.4f}, p-value: {p_val_ttest:.4f}")
print("Significance Level: 0.05")

if p_val_ttest < 0.05:
    print("Result: Reject H0. There is a significant difference in Loan Amounts.")
else:
    print("Result: Fail to reject H0. No significant difference found.")
