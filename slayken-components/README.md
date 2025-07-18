# SlaykenHeader

Ein stylischer Header mit Farbverlauf, Schatten und Titeltext – anpassbar über Props.

## 🔧 Import

```js
import { SlaykenHeader } from "slayken-components";
  title="Mein Header"
  containerStyle={{
    borderBottomWidth: 0,
  }}
  textStyle={{
    fontSize: 24,
    color: "#fff", // besser für weißen Hintergrund
    letterSpacing: 1,
  }}
  backgroundColor={["black", "white"]}
/>
```

# SlaykenFooter

Ein stylischer Footer mit Schatten, Text und anpassbarem Verlauf – ideal für Slayken-Apps.

## 🔧 Import

```js
import { SlaykenFooter } from "slayken-components";
<SlaykenFooter
  text="Mein Footer"
  containerStyle={{
    backgroundColor: "white", // nur sichtbar, wenn colors überschrieben wird
    borderTopWidth: 0,
  }}
  textStyle={{
    fontSize: 16,
    color: "#fff",
    letterSpacing: 0.5,
  }}
  colors={["black", "white"]}
/>;
```
