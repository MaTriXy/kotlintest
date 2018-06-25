package com.sksamuel.kotlintest.specs

import io.kotlintest.matchers.numerics.shouldBeLessThan
import io.kotlintest.specs.FeatureSpec

class FeatureSpecTest : FeatureSpec() {

  init {

    feature("a feature") {
      scenario("can execute a scenario") {
        1.shouldBeLessThan(4)
      }
    }
  }
}