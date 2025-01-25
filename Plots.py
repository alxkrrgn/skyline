from flask import Flask, jsonify, send_from_directory
import os
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
from scipy.stats import norm

def sanitize_symbol(symbol):
    return symbol.replace('/', '_')

watchlist = ['MSFT',	'AAPL',	'NVDA',	'AMZN',	'GOOG',	'GOOGL',	'META',	'BRK/A',	'BRK/B',
             'LLY',	'TSM',	'TSLA',	'AVGO',	'NVO',	'JPM',	'V',	'UNH',	'WMT',	'MA',	'XOM',	'JNJ',	'PG',	'HD',
             'ASML',	'MRK',	'COST',	'TM',	'ABBV',	'ORCL',	'CVX',	'AMD',	'CRM',	'BAC',	'KO',	'NFLX',	'ACN',
             'ADBE',	'PEP',	'SAP',	'TMO',	'LIN',	'MCD',	'NVS',	'SHEL',	'ABT',	'AZN',	'CSCO',	'DIS',	'TMUS',	
             'BABA',	'WFC',	'DHR',	'INTU',	'INTC',	'TBC',	'PDD',	'QCOM',	'VZ',	'TBB',	'IBM',	'TTE',	'GE',
             'CMCSA',	'AMAT',	'UBER',	'CAT',	'RYAAY',	'NKE',	'NOW',	'PFE',	'UNP',	'AXP',	'AMGN',	'LYG',	
             'TXN',	'BHP',	'HSBC',	'PM',	'MS',	'FMX',	'RY',	'SPGI',	'ISRG',	'ARM',	'HDB',	'SYK',	'LOW',
             'COP',	'HON',	'GS',	'UPS',	'UL',	'MUFG',	'PLD',	'SNY',	'BA',	'BKNG',	'LRCX',	'BLK',	'T']


# Load data from a CSV file
df = pd.read_csv("/home/alex/Downloads/EPH_NQ1_01182025.csv")
for j in range(len(watchlist)):
    
    symbol = watchlist[j]
    sanitized_symbol = sanitize_symbol(symbol)
    # Replace 'price' with the column name containing the historical price points
    filtered_df = df[df['symbol'] == symbol]

    # Extract the 'close' column
    close_prices = filtered_df['close']
    
    # Ensure that close_prices has no non-positive values for Box-Cox
    close_prices = close_prices[close_prices > 0]
    data = close_prices

    #print(data)
    #data = np.random.exponential(scale=2, size=1000)  # Replace with your price data

    # Standardize the data
    standardized_data = (data - np.mean(data)) / np.std(data)
    
    # Apply a Box-Cox transformation
    transformed_data, lambda_ = stats.boxcox(data + 1e-5)  # Adding a small constant to avoid zeros

    # Test for normality
    shapiro_test = stats.shapiro(transformed_data)
    print(symbol)
    print(f"Shapiro-Wilk test statistic: {shapiro_test.statistic}, p-value: {shapiro_test.pvalue}")
    
    # Visualize the transformed data
    plt.figure(figsize=(10, 5))
    plt.hist(transformed_data, bins=30, density=True, alpha=0.6, color='g', label="Normalized_Close")
    xmin, xmax = plt.xlim()
    x = np.linspace(xmin, xmax, 100)
    p = stats.norm.pdf(x, np.mean(transformed_data), np.std(transformed_data))
    plt.plot(x, p, 'k', linewidth=3, label='Normalized', color='magenta')
    plt.title(symbol + " Transformed Data with Fitted Normal Distribution")
    plt.legend()
    output_dir = "public/images/"
    os.makedirs(output_dir, exist_ok=True)
    plt.savefig(os.path.join(output_dir, sanitized_symbol + "_Norm.jpg"))
    #plt.show()
    #plotName = "AAPL{0}".format(t+1)

    fig, ax1 = plt.subplots(figsize=(10, 5))

    # Plot histogram on the left Y-axis
    ax1.hist(close_prices, bins=30, alpha=0.6, color='r', label='Close')
    ax1.set_xlabel('Close Prices')
    ax1.set_ylabel('Frequency', color='g')
    ax1.tick_params(axis='y', labelcolor='g')

    # Create a second Y-axis on the right side of the plot
    ax2 = ax1.twinx()

    # Generate the fitted normal distribution curve
    xmin, xmax = plt.xlim()
    x = np.linspace(xmin, xmax, 100)
    p = stats.norm.pdf(x, np.mean(close_prices), np.std(close_prices))  # Using original close prices for fit

    # Plot the fitted normal distribution curve on the right Y-axis
    ax2.plot(x, p, 'k', linewidth=4, label='Raw', color='darkblue')
    ax2.set_ylabel('Normal Fit', color='k')
    ax2.tick_params(axis='y', labelcolor='k')

    # Add title and legend
    plt.title(symbol + " Close Prices with Box-Cox Transformation")
    ax1.legend(loc='upper left')

    # Show the plot
    plt.legend()
    plt.savefig(os.path.join(output_dir, sanitized_symbol + "_Close.jpg"))
    #plt.show()