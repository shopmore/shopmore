from datetime import datetime

def main(args):

  now = datetime.now()

  html = """\
    <turbo-stream action="append" target="element">
      <template>
        <p style="color:red">Rendered from the server at: {now}</p>
      </template>
    </turbo-stream>\
    """.format(now=now)

  return {
    "body": html,
    "headers": {
      "content-type": "text/vnd.turbo-stream.html; charset=utf-8"
    }
  }