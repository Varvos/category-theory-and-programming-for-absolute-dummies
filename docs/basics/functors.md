# Functors

This section explores various falvors of `Functors`, their role in mathematics, and their usage in programming.




=== "Scala"
    ```scala
    // Scala example of a functor
    trait Functor[F[_]] {
    def map[A, B](fa: F[A])(f: A => B): F[B]
    }
```

=== "Haskell"
    ```haskell
    -- Haskell example of a functor
    class Functor f where
    fmap :: (a -> b) -> f a -> f b
<<<<<<< HEAD
    ```

=======
    ```
>>>>>>> b2cfc05743ff4de74cc2db40f3f95709e80e0717
