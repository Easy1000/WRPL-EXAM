import pandas as pd
df = pd.read_csv('../adidas_usa.csv')
print(df.sort_values(by=['selling_price'], ascending=False).head())