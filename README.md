## How to release (Publish to npm)

**Befehle zum Veröffentlichen eines neuen Releases:**

```bash
# 1. In den Komponenten-Ordner wechseln
cd slayken-components

# 2. Als Patch/Mini/Major updaten (je nach Änderung)
npm version patch    # z.B. 1.0.0 -> 1.0.1
npm version minor    # z.B. 1.1.0 -> 1.2.0
npm version major    # z.B. 1.2.0 -> 2.0.0

# 3. Paket veröffentlichen
npm publish --access public
```
