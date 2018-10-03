# Stack
- Angular 5

# Public link
[http://mterminal.world-travel.uz](http://mterminal.world-travel.uz)

## Basic dependencies
- @angular-redux/store
- bootstrap
- angular2-toaster
- angular2-ladda

## Tasty moments
- Use changeDetect strategy for optimization
- Use redux for save history of payments
- Use i18n for saving the text information about errors
- Use zone.runOutsideAngular for optimization (Suppose this operation is very expensive and we do not need to render the component until we finish)

## Description
For authorization need use:
~~~
// it was necessary to save the data in constants as in this project, because have't of connecting to the database
Email: admin@gmail.com
Pass: 123456
~~~


# Refactoring
## Variant 1 with a minimum of lines
~~~
function func(s, a, b) {
  let i= (s && s.length) ? s.length-1 : -1, aIndex=-1, bIndex=-1;
  while ((aIndex === -1) && (bIndex === -1) && (i > 0)) {
    if (s[n] === a) aIndex=n;
    if (s[n] === b) bIndex=n;
    i --;
  }
  return (aIndex !== -1) ? (bIndex === -1) ? aIndex : Math.max(aIndex, bIndex) : (bIndex !== -1) ? bIndex : -1;   
};
~~~

## Optimal variant
~~~
function func(s, a, b) {
  if (!s || !s.length) {
    return -1;
  }
  let i= s.length-1;
  let aIndex=-1;
  let bIndex=-1;
  while ((aIndex === -1) && (bIndex === -1) && (i > 0)) {
    if (s[n] === a) aIndex=n;
    if (s[n] === b) bIndex=n;
    i --;
  }
  return (aIndex !== -1) ? (bIndex === -1) ? aIndex : Math.max(aIndex, bIndex) : (bIndex !== -1) ? bIndex : -1;   
};
~~~
