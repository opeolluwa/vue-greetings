# Customization

## Adding custom styles

Under the hood, [vue-greetings](htttps://github.com/opeolluwa/vue-greetings) is warpped contained in a **div** element with a class of **vue\_\_greetings** and is shipped with the css rules in the listing below

- vue-greetings default style

```css
.vue__greetings {
  text-transform: capitalize;
  font-size: 80%;
}
```

- You can add custom rules using the **vue\_\_greetings** class name hook

```css
.vue__greetings {
  font-size: 60% text-transform;
  color: #101010;
  font-weight: bolder;
}
```
