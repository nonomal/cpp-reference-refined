<div align=center>
<img width=70 src=https://cppref.microblock.cc/favicon.ico />
<h2>cpp-reference-refined</h2>
Make cppreference.com great again.
<br/>
  <h3>
    <a href="https://cppref.microblock.cc/">&gt; Try Now</a>
  </h3>
<h3>✨ Features</h3>
<table>
  <tr>
    <td>
      <img height=140 src=https://github.com/user-attachments/assets/22a46e44-3d1c-4c38-86ea-031db8b01592 />
    </td>
    <td>
      <img height=140 src=https://github.com/user-attachments/assets/0eef26c7-75fb-406c-afcd-a344bbd45cef />
    </td>
    <td>
      <img width=150 src=https://github.com/user-attachments/assets/48c78e07-9f26-4fe3-b1fc-2fa07693b2d8 />
    </td>
    <td>
      <img height=140 src=https://github.com/user-attachments/assets/b3d30bc7-54c2-406d-a9f0-d4557466a695 />
    </td>
    <td>
      <img height=60 src=https://github.com/user-attachments/assets/7624c5f4-36c4-46e9-b330-3a91c2f2f9f7 />
    </td>
  </tr>
  <tr>
    <td>Dark Mode</td>
    <td>Mobile Adaption</td>
    <td>Soft Syntax Highlight</td>
    <td>Auto Language</td>
    <td>Shortcut</td>
  </tr>
</table>

</div>

### Shortcuts
You can use links like [`cppref.microblock.cc/function`](cppref.microblock.cc/function) to jump to corresponding page directly.

The matching logic follows three steps:

1. **Complete Match:** The code first attempts a complete match for `xxx.html`. For example, if the user inputs `cstring.html`, the code tries to find `cstring.html`.  To facilitate matching, both the path and keyword are converted to lowercase, underscores are removed, and the `.html` extension is stripped.

2. **Path Match:** If the complete match fails, the code attempts to match inputs like `cpp26` to paths like `cpp/26`. For instance, if the user inputs `cppstring`, the code tries to find `cpp/string`.

3. **Partial Path Match:** If the previous two matches fail, the code attempts a partial path match. This is the most complex part, allowing users to input a combination of partial paths, such as matching `functionalfunction` to `cpp/functional/function.html`. It tries three matching strategies in decreasing order of priority:
    * No jumps, must match to the end: e.g., `functionalfunction` matches `functional/function/function.html` or `functional/function.html`
    * No jumps, doesn't have to match to the end: e.g., `someabc` matches `some/abc/function.html`
    * Allows jumps, doesn't have to match to the end: e.g., `someabc` might match `some/xxxx/abc/yyyy.html`

您可以使用类似 [`cppref.microblock.cc/function`](cppref.microblock.cc/function) 的链接直接跳转到相应页面。

匹配逻辑遵循三个步骤：

1. **完全匹配：** 代码首先尝试完全匹配 `xxx.html`。例如，如果用户输入 `cstring.html`，代码会尝试查找 `cstring.html`。为了便于匹配，路径和关键字都会转换为小写，下划线会被移除，并且会去掉 `.html` 扩展名。

2. **路径匹配：** 如果完全匹配失败，代码会尝试将类似 `cpp26` 的输入匹配到路径 `cpp/26`。例如，如果用户输入 `cppstring`，代码会尝试查找 `cpp/string`。

3. **部分路径匹配：** 如果前两个匹配失败，代码会尝试进行部分路径匹配。这是最复杂的部分，允许用户输入部分路径的组合，例如将 `functionalfunction` 匹配到 `cpp/functional/function.html`。它按照优先级递减的顺序尝试三种匹配策略：
    * 无跳转，必须匹配到末尾：例如，`functionalfunction` 匹配到 `functional/function/function.html` 或 `functional/function.html`
    * 无跳转，不必匹配到末尾：例如，`someabc` 匹配到 `some/abc/function.html`
    * 允许跳转，不必匹配到末尾：例如，`someabc` 可能匹配到 `some/xxxx/abc/yyyy.html`

### Misc

#### Generate index from local archive
```bat
dir /s /b /o:gn > index.txt
```
