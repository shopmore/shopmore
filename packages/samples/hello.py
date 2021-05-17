def main(args):
	name = args.get("name", "world")
	return { "body": "Hello, %s" % name }
