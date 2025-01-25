
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
from scipy.stats import norm

# Load data from a CSV file
df = pd.read_csv("/home/alex/Downloads/EPH_NQ1_01182025.csv")

# Replace 'price' with the column name containing the historical price points
filtered_df = df[df['symbol'] == 'AAPL']

# Extract the 'close' column
close_prices = filtered_df['close']
data = close_prices

# Standardize the data
standardized_data = (data - np.mean(data)) / np.std(data)

# Apply a Box-Cox transformation
transformed_data, lambda_ = stats.boxcox(data + 1e-5)  # Adding a small constant to avoid zeros

# Test for normality
shapiro_test = stats.shapiro(transformed_data)
print(f"Shapiro-Wilk test statistic: {shapiro_test.statistic}, p-value: {shapiro_test.pvalue}")

# Create the figure and axis objects for plotting
fig, ax1 = plt.subplots(figsize=(10, 5))

# Plot histogram of close_prices on the left Y-axis
ax1.hist(close_prices, bins=30, alpha=0.6, color='r', label='Close')
ax1.set_xlabel('Close Prices')
ax1.set_ylabel('Frequency', color='r')
ax1.tick_params(axis='y', labelcolor='r')

# Create a second Y-axis on the right side of the plot
ax2 = ax1.twinx()

# Generate the fitted normal distribution curve for raw close_prices
xmin, xmax = ax1.get_xlim()  # Get limits from ax1
x = np.linspace(xmin, xmax, 100)
p = stats.norm.pdf(x, np.mean(close_prices), np.std(close_prices))  # Using original close prices for the fit

# Plot the fitted normal distribution curve on the right Y-axis
ax2.plot(x, p, 'k', linewidth=4, label='Normal Fit', color='darkblue')
ax2.set_ylabel('Normal Fit', color='k')
ax2.tick_params(axis='y', labelcolor='k')

# Add title and legends
ax1.legend(loc='upper left')

# Create a new plot for the transformed data
fig, ax3 = plt.subplots(figsize=(10, 5))

# Plot the histogram of transformed_data on the left Y-axis
ax3.hist(transformed_data, bins=30, density=True, alpha=0.6, color='g', label="Normalized_Close")
ax3.set_xlabel('Transformed Data')
ax3.set_ylabel('Density', color='g')
ax3.tick_params(axis='y', labelcolor='g')

# Generate the fitted normal distribution curve for transformed data
xmin, xmax = ax3.get_xlim()  # Get limits from ax3
x = np.linspace(xmin, xmax, 100)
p = stats.norm.pdf(x, np.mean(transformed_data), np.std(transformed_data))

# Plot the fitted normal distribution curve for transformed data
ax3.plot(x, p, 'k', linewidth=3, label='Normalized', color='magenta')
ax3.set_title("Transformed Data with Fitted Normal Distribution")
ax3.legend()

# Save both plots
plt.savefig('plot1.png')
plt.savefig('plot2.png')
plt.show()