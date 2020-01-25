Alright! Let's get started.

So, you've been given a function that returns a promise.  
We're going to be working with this dog breed api.

Taking a look at the code here, you can see that we're importing a utilities file
called `utilties`, and we have a function in there called `getDogBreeds`, we're not going to look at the implementation of it,
all we know is that it returns a promise, and inside of that promise contains
the values that we want to look at.

Let's output the result of `utilities.getDogBreeds` and see what we're working with.

```node
console.log(utilities.getDogBreeds())
```

You can see in the terminal the output is a Promise that says it is pending.

We're expecting to get an array of objects that have names and ids.
So we know that this isn't right.

In order to get the actual value, we have to resolve the promise.

In order to do this, we can attach `.then` to the `getDogBreeds()` invocation

And `.then` is a function that takes in the resolved dog breeds as an argument.

We can then print that value out.

Let's make this change.

```js
function outputDogBreeds(dogBreeds) {
  console.log(dogBreeds)
}
utilities.getDogBreeds().then(outputDogBreeds)
```

And you can see in the terminal, we have some dog breeds getting printed.

Let's look look further into this function to understand it.

When `getDogBreeds()` is invoked, it returns a promise, in order to resolve that promise and get a value out of it.
We need to use the `.then` callback. Then takes in a function as its argument, as you can see here.

The function that is passed into then gets the resolved value into it.

Here we named it `dogBreeds`, we can name that whatever we want. Let's make that change.

Let's rename dogBreeds to be just `breeds`

Now we can see that it doesn't matter what we name the variable passed into outputDogBreeds.
The terminal still outputs the same value.

There is another way you can pass the function into then, you can actually just declare your function
inline if you want to.

Let's make that change

```js
utilities.getDogBreeds().then(function(breeds) {
  console.log(breeds)
})
```

And looking at the terminal, we can see that it's still outputting the breeds.

And lastly, since all we're doing is outputting whatever value gets resolved, we can just pass `console.log` directly.

```js
utilities.getDogBreeds().then(console.log)
```

And we can see it's still outputting on the terminal.
