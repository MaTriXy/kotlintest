package com.sksamuel.kotlintest.specs

import io.kotlintest.specs.FreeSpec

class FreeSpecInstancePerTestDuplicateNameTest : FreeSpec() {

  override fun isInstancePerTest(): Boolean = true

  init {

    "wibble" { }
    try {
      "wibble" {}
      throw RuntimeException("Must fail when adding duplicate root test name")
    } catch (e: IllegalArgumentException) {
    }

    "wobble" - {
      "foo" { }
      try {
        "foo" { }
        throw RuntimeException("Must fail when adding duplicate nested test name")
      } catch (e: IllegalStateException) {
      }
    }
  }
}