<script lang="ts">
    import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
    } from "sveltestrap";
</script>

<Card class="mb-3">
    <CardHeader>
        <CardTitle>About</CardTitle>
    </CardHeader>
    <CardBody>
        <CardSubtitle>ShopMore is ServerLess</CardSubtitle>
        <CardText>
            <p>ShopMore is an Open Source implementation of a Serverless eCommerce
            Platform.</p>
            <img width="200"alt="nimbella" src="/image/nimbella.svg" />
        </CardText>
    </CardBody>
    <CardFooter
        >Powered by <a href="https://www.nimbella.com"
            >Nimbella Serverless Platform</a
        ></CardFooter>
</Card>
