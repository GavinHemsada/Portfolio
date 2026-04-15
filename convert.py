import base64

with open('public/logo_without_bg.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg = f'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><image href="data:image/png;base64,{b64}" width="100%" height="100%"/></svg>'

with open('public/logo.svg', 'w') as f:
    f.write(svg)
