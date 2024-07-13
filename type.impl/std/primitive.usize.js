(function() {var type_impls = {
"common_base":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BitStore-for-usize\" class=\"impl\"><a href=\"#impl-BitStore-for-usize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"common_base/bit_vec/prelude/trait.BitStore.html\" title=\"trait common_base::bit_vec::prelude::BitStore\">BitStore</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Access\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Access\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Access\" class=\"associatedtype\">Access</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/cell/struct.Cell.html\" title=\"struct core::cell::Cell\">Cell</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>The unsigned integers will only be <code>BitStore</code> type parameters\nfor handles to unaliased memory, following the normal Rust\nreference rules.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Mem\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Mem\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Mem\" class=\"associatedtype\">Mem</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>The element type used in the memory region underlying a <code>BitSlice</code>. It\nis <em>always</em> one of the unsigned integer fundamentals.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Alias\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Alias\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Alias\" class=\"associatedtype\">Alias</a> = BitSafeUsize</h4></section></summary><div class='docblock'>A sibling <code>BitStore</code> implementor that is known to be alias-safe. It is\nused when a <code>BitSlice</code> introduces multiple handles that view the same\nmemory location, and at least one of them has write capabilities to it.\nIt must have the same underlying memory type, and can only change access\npatterns or public-facing usage.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Unalias\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Unalias\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Unalias\" class=\"associatedtype\">Unalias</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>The inverse of <code>::Alias</code>. It is used when a <code>BitSlice</code> removes the\nconditions that required a <code>T -&gt; T::Alias</code> transition.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ZERO\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ZERO\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedconstant.ZERO\" class=\"constant\">ZERO</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> = 0usize</h4></section></summary><div class='docblock'>The zero constant.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#tymethod.new\" class=\"fn\">new</a>(value: &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"common_base/bit_vec/prelude/trait.BitStore.html\" title=\"trait common_base::bit_vec::prelude::BitStore\">BitStore</a>&gt;::<a class=\"associatedtype\" href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Mem\" title=\"type common_base::bit_vec::prelude::BitStore::Mem\">Mem</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Wraps a raw memory value as a <code>BitStore</code> type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_value\" class=\"method trait-impl\"><a href=\"#method.load_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#tymethod.load_value\" class=\"fn\">load_value</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"common_base/bit_vec/prelude/trait.BitStore.html\" title=\"trait common_base::bit_vec::prelude::BitStore\">BitStore</a>&gt;::<a class=\"associatedtype\" href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Mem\" title=\"type common_base::bit_vec::prelude::BitStore::Mem\">Mem</a></h4></section></summary><div class='docblock'>Loads a value out of the memory system according to the <code>::Access</code>\nrules. This may be called when the value is aliased by a write-capable\nreference.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_value\" class=\"method trait-impl\"><a href=\"#method.store_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#tymethod.store_value\" class=\"fn\">store_value</a>(&amp;mut self, value: &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a> as <a class=\"trait\" href=\"common_base/bit_vec/prelude/trait.BitStore.html\" title=\"trait common_base::bit_vec::prelude::BitStore\">BitStore</a>&gt;::<a class=\"associatedtype\" href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Mem\" title=\"type common_base::bit_vec::prelude::BitStore::Mem\">Mem</a>)</h4></section></summary><div class='docblock'>Stores a value into the memory system. This is only called when there\nare no other handles to the value, and it may bypass <code>::Access</code>\nconstraints.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ALIGNED_TO_SIZE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ALIGNED_TO_SIZE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedconstant.ALIGNED_TO_SIZE\" class=\"constant\">ALIGNED_TO_SIZE</a>: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>] = _</h4></section></summary><div class='docblock'>All implementors are required to have their alignment match their size. <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedconstant.ALIGNED_TO_SIZE\">Read more</a></div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ALIAS_WIDTH\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.ALIAS_WIDTH\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedconstant.ALIAS_WIDTH\" class=\"constant\">ALIAS_WIDTH</a>: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">1</a>] = _</h4></section></summary><div class='docblock'>All implementors are required to have <code>Self</code> and <code>Self::Alias</code> be equal\nin representation. This is true by fiat for all types except the\nunsigned integers. <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedconstant.ALIAS_WIDTH\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_bit\" class=\"method trait-impl\"><a href=\"#method.get_bit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#method.get_bit\" class=\"fn\">get_bit</a>&lt;O&gt;(&amp;self, index: BitIdx&lt;Self::<a class=\"associatedtype\" href=\"common_base/bit_vec/prelude/trait.BitStore.html#associatedtype.Mem\" title=\"type common_base::bit_vec::prelude::BitStore::Mem\">Mem</a>&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a><div class=\"where\">where\n    O: <a class=\"trait\" href=\"common_base/bit_vec/prelude/trait.BitOrder.html\" title=\"trait common_base::bit_vec::prelude::BitOrder\">BitOrder</a>,</div></h4></section></summary><div class='docblock'>Reads a single bit out of the memory system according to the <code>::Access</code>\nrules. This is lifted from <a href=\"crate::access::BitAccess\"><code>BitAccess</code></a> so that it can be used\nelsewhere without additional casts. <a href=\"common_base/bit_vec/prelude/trait.BitStore.html#method.get_bit\">Read more</a></div></details></div></details>","BitStore","common_base::AffectedRows"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RangeExt%3Cusize%3E-for-R\" class=\"impl\"><a href=\"#impl-RangeExt%3Cusize%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/trait.RangeBounds.html\" title=\"trait core::ops::range::RangeBounds\">RangeBounds</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize\" class=\"method trait-impl\"><a href=\"#method.normalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">normalize</a>(\n    self,\n    start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    end: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Normalizes a range-like type to a canonical half-open <code>Range</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersection\" class=\"method trait-impl\"><a href=\"#method.intersection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">intersection</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the intersection between two range-likes. The produced <code>Range</code>\nspans only the elements common to both. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the union between two range-likes. The produced <code>Range</code> spans all\nelements present in at least one of them. <a>Read more</a></div></details></div></details>","RangeExt<usize>","common_base::AffectedRows"]],
"common_meta":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RangeExt%3Cusize%3E-for-R\" class=\"impl\"><a href=\"#impl-RangeExt%3Cusize%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/trait.RangeBounds.html\" title=\"trait core::ops::range::RangeBounds\">RangeBounds</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize\" class=\"method trait-impl\"><a href=\"#method.normalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">normalize</a>(\n    self,\n    start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    end: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Normalizes a range-like type to a canonical half-open <code>Range</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersection\" class=\"method trait-impl\"><a href=\"#method.intersection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">intersection</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the intersection between two range-likes. The produced <code>Range</code>\nspans only the elements common to both. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the union between two range-likes. The produced <code>Range</code> spans all\nelements present in at least one of them. <a>Read more</a></div></details></div></details>","RangeExt<usize>","common_meta::test_util::AffectedRows"]],
"common_query":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RangeExt%3Cusize%3E-for-R\" class=\"impl\"><a href=\"#impl-RangeExt%3Cusize%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/trait.RangeBounds.html\" title=\"trait core::ops::range::RangeBounds\">RangeBounds</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize\" class=\"method trait-impl\"><a href=\"#method.normalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">normalize</a>(\n    self,\n    start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    end: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Normalizes a range-like type to a canonical half-open <code>Range</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersection\" class=\"method trait-impl\"><a href=\"#method.intersection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">intersection</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the intersection between two range-likes. The produced <code>Range</code>\nspans only the elements common to both. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the union between two range-likes. The produced <code>Range</code> spans all\nelements present in at least one of them. <a>Read more</a></div></details></div></details>","RangeExt<usize>","common_query::OutputRows","common_query::OutputCost"]],
"flow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RangeExt%3Cusize%3E-for-R\" class=\"impl\"><a href=\"#impl-RangeExt%3Cusize%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/trait.RangeBounds.html\" title=\"trait core::ops::range::RangeBounds\">RangeBounds</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize\" class=\"method trait-impl\"><a href=\"#method.normalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">normalize</a>(\n    self,\n    start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    end: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Normalizes a range-like type to a canonical half-open <code>Range</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersection\" class=\"method trait-impl\"><a href=\"#method.intersection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">intersection</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the intersection between two range-likes. The produced <code>Range</code>\nspans only the elements common to both. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the union between two range-likes. The produced <code>Range</code> spans all\nelements present in at least one of them. <a>Read more</a></div></details></div></details>","RangeExt<usize>","flow::adapter::worker::ReqId"]],
"mito2":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RangeExt%3Cusize%3E-for-R\" class=\"impl\"><a href=\"#impl-RangeExt%3Cusize%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/trait.RangeBounds.html\" title=\"trait core::ops::range::RangeBounds\">RangeBounds</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize\" class=\"method trait-impl\"><a href=\"#method.normalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">normalize</a>(\n    self,\n    start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    end: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Normalizes a range-like type to a canonical half-open <code>Range</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersection\" class=\"method trait-impl\"><a href=\"#method.intersection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">intersection</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the intersection between two range-likes. The produced <code>Range</code>\nspans only the elements common to both. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the union between two range-likes. The produced <code>Range</code> spans all\nelements present in at least one of them. <a>Read more</a></div></details></div></details>","RangeExt<usize>","mito2::sst::index::statistics::RowCount","mito2::sst::parquet::row_selection::SkipRowCount"]],
"store_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RangeExt%3Cusize%3E-for-R\" class=\"impl\"><a href=\"#impl-RangeExt%3Cusize%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/trait.RangeBounds.html\" title=\"trait core::ops::range::RangeBounds\">RangeBounds</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.normalize\" class=\"method trait-impl\"><a href=\"#method.normalize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">normalize</a>(\n    self,\n    start: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;,\n    end: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Normalizes a range-like type to a canonical half-open <code>Range</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.intersection\" class=\"method trait-impl\"><a href=\"#method.intersection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">intersection</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the intersection between two range-likes. The produced <code>Range</code>\nspans only the elements common to both. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.union\" class=\"method trait-impl\"><a href=\"#method.union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">union</a>&lt;R2&gt;(self, other: R2) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt;<div class=\"where\">where\n    R2: RangeExt&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,</div></h4></section></summary><div class='docblock'>Finds the union between two range-likes. The produced <code>Range</code> spans all\nelements present in at least one of them. <a>Read more</a></div></details></div></details>","RangeExt<usize>","store_api::region_request::AffectedRows"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()